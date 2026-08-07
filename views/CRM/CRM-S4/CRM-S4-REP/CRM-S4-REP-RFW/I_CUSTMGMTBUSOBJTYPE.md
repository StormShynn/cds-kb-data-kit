---
name: I_CUSTMGMTBUSOBJTYPE
description: Custmgmtbusobjtype
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_CUSTMGMTBUSOBJTYPE

**Custmgmtbusobjtype**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessObjectType` | ✓ | |  | `subobj_category` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustMgmtBusObjTypeText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Bus Object Type of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICUSTMGMTBOTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'BusinessObjectType',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CustMgmtBusObjType'

@Search: {
  searchable: true
}

define view I_CustMgmtBusObjType
  as select from crmc_subob_cat

  association [1..*] to I_CustMgmtBusObjTypeText as _Text on $projection.BusinessObjectType = _Text.BusinessObjectType


{
      @ObjectModel.text.association: '_Text'
      @Search:{ defaultSearchElement: true }
  key subobj_category as BusinessObjectType,
      @Search:{ defaultSearchElement: true }
      _Text
}
```
