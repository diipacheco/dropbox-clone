/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdInsertDriveFile } from 'react-icons/md';
import { RouteComponentProps } from 'react-router-dom';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import socket from 'socket.io-client';
import logo from '../../Assets/logo.svg';
import * as S from './styles';
import api from '../../Services/api';

interface BoxRouterProps {
  id: string
}

const Box : React.SFC<RouteComponentProps<BoxRouterProps>> = (props) => {
  const [state, setState] = useState({
    box: {
     title: '',
     createdAt: '',
     updatedAt: '',
     files: [{
       id: '',
       createdAt: '',
       title: '',
       url: '',
     }],
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: any) => {
      const data = new FormData();
      const box = props.match.params.id;

      data.append('file', file);
      api.post(`boxes/${box}/files`, data);
    });
  }, []);

  const subscribeToNewFiles = () => {
    const box = props.match.params.id;
    const io = socket('http://dropbox-node-api.herokuapp.com');
    io.emit('connectRoom', box);
    io.on('file', (data: any) => {
      setState({
        box: { ...state.box, files: [data, ...state.box.files] },
      });
    });
  };

  subscribeToNewFiles();


  useEffect(() => {
    const handleBox = async () => {
      const boxid = props.match.params.id;
      const response = await api.get(`boxes/${boxid}`);
      setState({
        ...state.box,
        box: {
          title: response.data.title,
          createdAt: response.data.createdAt,
          files: response.data.files,
          updatedAt: response.data.updatedAt,
        },

      });
    };
   handleBox();
  }, []);
  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <S.Container>
        <S.Header>
          <img src={logo} alt="Box da Aplicação" />
          <h1>{state.box.title}</h1>
        </S.Header>
        <S.Upload {...getRootProps()}>
          <input {...getInputProps()} />
          { isDragActive
             ? <p>Solte os arquivos</p>
          : <p>Arraste arquivos ou clique aqui</p>
        }
        </S.Upload>
        <ul>
          {state.box.files.map(file => (
            <li key={file.id}>
              <S.FileInfo href={file.url} target="_blank">
                <MdInsertDriveFile size={24} color="#a5cfff" />
                <strong>{file.title}</strong>
              </S.FileInfo>
              <span>
há
                {' '}
                {distanceInWords(file.createdAt, new Date(), {
                  locale: pt,
                })}
                {' '}
              </span>
            </li>

          ))}

        </ul>
      </S.Container>

    </>
  );
};

export default Box;
