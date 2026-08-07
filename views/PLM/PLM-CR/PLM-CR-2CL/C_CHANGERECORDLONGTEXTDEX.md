---
name: C_CHANGERECORDLONGTEXTDEX
description: Change RecordLONGTEXTDEX
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
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
# C_CHANGERECORDLONGTEXTDEX

**Change RecordLONGTEXTDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ChangeRecordReferenceTextUUID` | ✓ | |  | `ParentChangeRecordUUID` |
| `ChangeRecordDetailDescription` |  | |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Long Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #L,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordLongText'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true
//        delta.changeDataCapture: {
//          mapping:[
//            {
//              table:'/PLMI/CHGRECD_L', role: #MAIN,
//              viewElement: ['ChangeRecordReferenceTextUUID', 'Language'],              
//              tableElement: [ 'DB_KEY', 'LANGU']
//             }
//           ]
//        }
    }
}
define view entity C_ChangeRecordLongTextDEX as select from I_ChgRecHdrExtension
//  as select from I_ChgRecDetailDescriptionTxt
{
  key ParentChangeRecordUUID as ChangeRecordReferenceTextUUID,
//      @Semantics.language: true
//  key $session.system_language as Language ,
//       @Semantics.language: true
//  key  Language ,
      @Semantics.text: true
      ChangeRecordDetailDescription
}
```
