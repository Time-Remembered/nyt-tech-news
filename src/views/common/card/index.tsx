import React from "react";

interface ArticleCard {
    url: string;
    multimedia: string;
    headline: string;
    by: string;
    date: string;
    abstract: string;
    onDelete?: any;
    onSave?: any;
}

const Article = ({ url, multimedia, headline, by, date, abstract, onDelete, onSave }: ArticleCard) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {onDelete &&
                            <button
                                onClick={onDelete.bind(this, url)}
                                className="overlay btn btn-dark btn-lg fas fa-trash"
                            />
                        }
                        {
                            onSave &&
                            <button
                                onClick={onSave.bind(
                                    this,
                                    url,
                                    multimedia,
                                    headline,
                                    by,
                                    date,
                                    abstract
                                )}
                                className="overlay btn btn-dark btn-lg fas fa-star"
                            />
                        }
                        <a
                            href={url}
                            className="p-0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className="project-card card border-0 bg-dark"
                                style={{
                                    backgroundImage: `url(${multimedia})`,
                                }}
                            >
                                <div className="project-card-content card-body">
                                    <div className="project-text">
                                        <h4 className="bold">{headline}</h4>
                                        <div className="text-muted">{by}</div>
                                        <div className="text-muted">{date}</div>
                                        <div className="text-muted">{abstract}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Article;
