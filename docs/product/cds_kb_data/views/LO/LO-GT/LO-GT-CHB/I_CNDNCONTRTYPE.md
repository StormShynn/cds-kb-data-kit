---
name: I_CNDNCONTRTYPE
description: "Cndncontrtype"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRTYPE

**Cndncontrtype**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrType` | ✓ | |  |  |  |  |
| `CndnContrTypeBlockUsage` |  | |  |  |  |  |
| `CndnContrPartnerCat` |  | |  |  |  |  |
| `CndnContrEligibleCat` |  | |  |  |  |  |
| `CndnContrClassfctnType` |  | |  |  |  |  |
| `CndnContrHasNoConditions` |  | |  |  |  |  |
| `CndnContrSettlmtType` |  | |  |  |  |  |
| `CndnContrChangeability` |  | |  |  |  |  |
| `BusVolFldCombnSet` |  | |  |  |  |  |
| `CndnContrPrtlSettlmtCat` |  | |  |  |  |  |
| `CndnContrItemCategory` |  | |  |  |  |  |
| `CndnContrAccrRvslCat` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_CndnContrTypeBlockUsage` | | ✓ | | | | |
| `_CndnContrPartnerCat` | | ✓ | | | | |
| `_CndnContrChangeability` | | ✓ | | | | |
| `_BusVolFldCombnSet` | | ✓ | | | | |
| `_CndnContrClassfctnType` | | ✓ | | | | |
| `_CndnContrItemCategory` | | ✓ | | | | |
| `_CndnContrEligibleCat` | | ✓ | | | | |
| `_CndnContrSettlmtType` | | ✓ | | | | |
| `_CndnContrPrtlSettlmtCat` | | ✓ | | | | |
| `_CndnContrAccrRvslCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CndnContrTypeText` | [0..*] |
| `_CndnContrTypeBlockUsage` | `I_CndnContrTypeBlockUsage` | [0..1] |
| `_CndnContrPartnerCat` | `I_CndnContrPartnerCat` | [0..1] |
| `_CndnContrChangeability` | `I_CndnContrChangeability` | [0..1] |
| `_BusVolFldCombnSet` | `I_BusVolFldCombnSet` | [0..1] |
| `_CndnContrClassfctnType` | `I_CndnContrClassfctnType` | [0..1] |
| `_CndnContrItemCategory` | `I_CndnContrItemCategory` | [0..1] |
| `_CndnContrEligibleCat` | `I_CndnContrEligibleCat` | [0..1] |
| `_CndnContrSettlmtType` | `I_CndnContrSettlmtType` | [0..1] |
| `_CndnContrPrtlSettlmtCat` | `I_CndnContrPrtlSettlmtCat` | [0..1] |
| `_CndnContrAccrRvslCat` | `I_CndnContrAccrRvslCat` | [0..1] |

## Source Code

```abap
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_Text'],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   representativeKey:     'CndnContrType',
   sapObjectNodeType.name: 'ConditionContractType',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE],
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
  }
} 
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFCOCOTYPE'
@EndUserText.label: 'Condition Contract Type'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrType
  as select from R_CndnContrType

  association [0..*] to I_CndnContrTypeText       as _Text                    on $projection.CndnContrType = _Text.CndnContrType
  association [0..1] to I_CndnContrTypeBlockUsage as _CndnContrTypeBlockUsage on $projection.CndnContrTypeBlockUsage = _CndnContrTypeBlockUsage.CndnContrTypeBlockUsage
  association [0..1] to I_CndnContrPartnerCat     as _CndnContrPartnerCat     on $projection.CndnContrPartnerCat = _CndnContrPartnerCat.CndnContrPartnerCat
  association [0..1] to I_CndnContrChangeability  as _CndnContrChangeability  on $projection.CndnContrChangeability = _CndnContrChangeability.CndnContrChangeability
  association [0..1] to I_BusVolFldCombnSet       as _BusVolFldCombnSet       on $projection.BusVolFldCombnSet = _BusVolFldCombnSet.BusVolFldCombnSet
  association [0..1] to I_CndnContrClassfctnType  as _CndnContrClassfctnType  on $projection.CndnContrClassfctnType = _CndnContrClassfctnType.CndnContrClassfctnType
  association [0..1] to I_CndnContrItemCategory   as _CndnContrItemCategory   on $projection.CndnContrItemCategory = _CndnContrItemCategory.CndnContrItemCategory
  association [0..1] to I_CndnContrEligibleCat    as _CndnContrEligibleCat    on $projection.CndnContrEligibleCat = _CndnContrEligibleCat.CndnContrEligibleCat
  association [0..1] to I_CndnContrSettlmtType    as _CndnContrSettlmtType    on $projection.CndnContrSettlmtType = _CndnContrSettlmtType.CndnContrSettlmtType
  association [0..1] to I_CndnContrPrtlSettlmtCat as _CndnContrPrtlSettlmtCat on $projection.CndnContrPrtlSettlmtCat = _CndnContrPrtlSettlmtCat.CndnContrPrtlSettlmtCat
  association [0..1] to I_CndnContrAccrRvslCat    as _CndnContrAccrRvslCat    on $projection.CndnContrAccrRvslCat = _CndnContrAccrRvslCat.CndnContrAccrRvslCat

{
      @ObjectModel.text.association: '_Text'
  key CndnContrType,

      @ObjectModel.foreignKey.association: '_CndnContrTypeBlockUsage'
      CndnContrTypeBlockUsage,
      @ObjectModel.foreignKey.association: '_CndnContrPartnerCat'
      CndnContrPartnerCat,
      @ObjectModel.foreignKey.association: '_CndnContrEligibleCat'
      CndnContrEligibleCat,
      @ObjectModel.foreignKey.association: '_CndnContrClassfctnType'
      CndnContrClassfctnType,
      CndnContrHasNoConditions,
      @ObjectModel.foreignKey.association: '_CndnContrSettlmtType'
      CndnContrSettlmtType,
      @ObjectModel.foreignKey.association: '_CndnContrChangeability'
      CndnContrChangeability,
      @ObjectModel.foreignKey.association: '_BusVolFldCombnSet'
      BusVolFldCombnSet,
      @ObjectModel.foreignKey.association: '_CndnContrPrtlSettlmtCat'
      CndnContrPrtlSettlmtCat,
      @ObjectModel.foreignKey.association: '_CndnContrItemCategory'
      CndnContrItemCategory,
      @ObjectModel.foreignKey.association: '_CndnContrAccrRvslCat'
      CndnContrAccrRvslCat,

      //Associations
      _Text,
      _CndnContrTypeBlockUsage,
      _CndnContrPartnerCat,
      _CndnContrClassfctnType,
      _CndnContrChangeability,
      _BusVolFldCombnSet,
      _CndnContrItemCategory,
      _CndnContrEligibleCat,
      _CndnContrSettlmtType,
      _CndnContrPrtlSettlmtCat,
      _CndnContrAccrRvslCat
}
```
