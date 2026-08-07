---
name: I_DELIVSCHEDTYPEMRPRLVNCECODET
description: Delivschedtypemrprlvncecodet
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_DELIVSCHEDTYPEMRPRLVNCECODET

**Delivschedtypemrprlvncecodet**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DelivSchedTypeMRPRlvnceCode` | ✓ | |  | `substring( domvalue_l,1,1 )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DelivSchedTypeMRPRlvnceCodeTxt` |  | |  | `ddtext` |  |  |
| `_DelivSchedTypeMRPRlvnceCode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DelivSchedTypeMRPRlvnceCode` | `I_DelivSchedTypeMRPRlvnceCode` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'MRP Rlvnce Code for Deliv Sched Tp - Txt'
@AbapCatalog.sqlViewName: 'IMRPRLVNCECODET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'DelivSchedTypeMRPRlvnceCode',
  usageType:{
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #S
  }
}
@Analytics.dataExtraction.enabled: true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ] 
@Metadata.ignorePropagatedAnnotations:true

define view I_DelivSchedTypeMRPRlvnceCodeT
  as select from dd07t
  association [0..1] to I_DelivSchedTypeMRPRlvnceCode as _DelivSchedTypeMRPRlvnceCode on $projection.DelivSchedTypeMRPRlvnceCode = _DelivSchedTypeMRPRlvnceCode.DelivSchedTypeMRPRlvnceCode
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_DelivSchedTypeMRPRlvnceCode'
  key substring( domvalue_l,1,1 ) as DelivSchedTypeMRPRlvnceCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,
      @Semantics.text: true
      ddtext                      as DelivSchedTypeMRPRlvnceCodeTxt,

      //Association
      _DelivSchedTypeMRPRlvnceCode,
      _Language
}
where
  (
    dd07t.domname  = 'ABRAB'
  )
  and(
    dd07t.as4local = 'A'
  )
```
