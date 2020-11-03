import React, { FC, useMemo } from 'react';
import { TextareaInputField, TextInputField } from '@percona/platform-core';
import Validators from 'shared/components/helpers/validators';
import { getStyles } from '../FormParts.styles';
import { Messages } from '../FormParts.messages';

export const LabelsFormPart: FC = () => {
  const styles = getStyles();

  const customLabelsValidators = useMemo(() => [Validators.validateKeyValue], []);

  return (
    <div className={styles.groupWrapper}>
      <h4 className={styles.sectionHeader}>{Messages.form.titles.labels}</h4>
      <TextInputField
        name="environment"
        label={Messages.form.labels.labels.environment}
        placeholder={Messages.form.placeholders.labels.environment}
      />
      <TextInputField
        name="region"
        label={Messages.form.labels.labels.region}
        placeholder={Messages.form.placeholders.labels.region}
      />
      <TextInputField
        name="az"
        label={Messages.form.labels.labels.az}
        placeholder={Messages.form.placeholders.labels.az}
      />
      <TextInputField
        name="replication_set"
        label={Messages.form.labels.labels.replicationSet}
        placeholder={Messages.form.placeholders.labels.replicationSet}
      />
      <TextInputField
        name="cluster"
        label={Messages.form.labels.labels.cluster}
        placeholder={Messages.form.placeholders.labels.cluster}
      />
      <TextareaInputField
        name="custom_labels"
        label={Messages.form.labels.labels.customLabels}
        placeholder={Messages.form.placeholders.labels.customLabels}
        validators={customLabelsValidators}
      />
    </div>
  );
};
