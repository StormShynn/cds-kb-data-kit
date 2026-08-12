---
name: C_CHANGERECORDDOCITEMDEX
description: "Change RecordDOCITEMDEX"
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
  - item-level
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDDOCITEMDEX

**Change RecordDOCITEMDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeRecordReferenceUUID` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Document as Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordReferenceDocument'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGREC_DOC', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}

define view entity C_ChangeRecordDocItemDEX as select from I_ChangeRecordItem 
//  as select from I_ChangeRecordDocInfoRecord
{
  key ChangeRecordReferenceUUID
//      ChangeRecordUUID,      
//      DocumentInfoRecordDocNumber,
//      DocumentInfoRecordDocType,
//      DocumentInfoRecordDocVersion,
//      DocumentInfoRecordDocPart
}
```
