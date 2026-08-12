---
name: C_CHANGERECORDTEXTDEX
description: "Change RecordTEXTDEX"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - change-record
  - text
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDTEXTDEX

**Change RecordTEXTDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceTextUUID` | ✓ | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `ChangeRecordReferenceUUID` |  | |  |  |  |  |
| `ChangeRecordUUID` |  | |  |  |  |  |
| `ChgRecordDescriptionText` |  | |  |  |  |  |

## Source Code

```abap
@Metadata:          {allowExtensions:             true,
                     ignorePropagatedAnnotations: true}

@ObjectModel:       {usageType:                   {serviceQuality: #D,
                                                   sizeCategory:   #L,
                                                   dataClass:      #MIXED},
                     modelingPattern:             #NONE,
                     supportedCapabilities:      [
                                                  #EXTRACTION_DATA_SOURCE]}

@VDM:               {viewType:                    #CONSUMPTION,
                     lifecycle.contract.type:     #PUBLIC_LOCAL_API}

@Analytics:         {dataCategory:                #FACT,
                     dataExtraction:              {enabled: true,
                                                   delta.changeDataCapture: {
                                                   mapping: [{
                                                                table: '/iam/d_i_desc', role: #MAIN,
                                                                viewElement:  ['ChangeRecordReferenceTextUUID'],
                                                                tableElement: ['db_key'] },
                                                                {
                                                                table: '/iam/d_i_desc_tx', role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                viewElement:  ['ChangeRecordReferenceUUID'],
                                                                tableElement: ['db_key']}
                                                                ]                                                            }
                                                  },
                     internalName:                #LOCAL}
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@EndUserText.label: 'Data Extraction for Change Record - Text'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
define view entity C_ChangeRecordTextDEX
  as select from I_ChgRecDescriptionText
{
         @Semantics.uuid: true
  key    ChangeRecordReferenceTextUUID,
         @Semantics.language: true
         Language,
         @Semantics.uuid: true
         ChangeRecordReferenceUUID,
         @Semantics.uuid: true
         ChangeRecordUUID,

         @Semantics.text: true
         ChgRecordDescriptionText

}
```
