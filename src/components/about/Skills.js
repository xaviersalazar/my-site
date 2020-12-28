import React from "react";
import { ReactComponent as AwsSvg } from "../../svg/aws.svg";
import { ReactComponent as AngularSvg } from "../../svg/angular.svg";
import { ReactComponent as CssSvg } from "../../svg/css.svg";
import { ReactComponent as DockerSvg } from "../../svg/docker.svg";
import { ReactComponent as GitSvg } from "../../svg/git.svg";
import { ReactComponent as GraphQlSvg } from "../../svg/graphql.svg";
import { ReactComponent as HtmlSvg } from "../../svg/html.svg";
import { ReactComponent as IonicSvg } from "../../svg/ionic.svg";
import { ReactComponent as JavaSvg } from "../../svg/java.svg";
import { ReactComponent as JavascriptSvg } from "../../svg/javascript.svg";
import { ReactComponent as JquerySvg } from "../../svg/jquery.svg";
import { ReactComponent as KubernetesSvg } from "../../svg/kubernetes.svg";
import { ReactComponent as MongodbSvg } from "../../svg/mongodb.svg";
import { ReactComponent as MysqlSvg } from "../../svg/mysql.svg";
import { ReactComponent as NodeSvg } from "../../svg/nodejs.svg";
import { ReactComponent as OraclesqlSvg } from "../../svg/oraclesql.svg";
import { ReactComponent as PythonSvg } from "../../svg/python.svg";
import { ReactComponent as ReactSvg } from "../../svg/react.svg";
import { ReactComponent as ReduxSvg } from "../../svg/redux.svg";
import { ReactComponent as RubySvg } from "../../svg/ruby.svg";
import { ReactComponent as SassSvg } from "../../svg/sass.svg";
import { ReactComponent as SpringSvg } from "../../svg/spring.svg";
import { ReactComponent as TypescriptSvg } from "../../svg/typescript.svg";
import { ReactComponent as WebpackSvg } from "../../svg/webpack.svg";

export const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="column">
          <JavascriptSvg className="icon-svg" />
        </div>
        <div className="column">
          <ReactSvg className="icon-svg" />
        </div>
        <div className="column">
          <AngularSvg className="icon-svg" />
        </div>
        <div className="column">
          <TypescriptSvg className="icon-svg" />
        </div>
      </div>
    </>
  );
};
