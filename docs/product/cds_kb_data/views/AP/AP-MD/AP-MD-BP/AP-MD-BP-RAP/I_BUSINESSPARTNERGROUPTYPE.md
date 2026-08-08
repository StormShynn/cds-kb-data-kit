---
name: I_BUSINESSPARTNERGROUPTYPE
description: "Business PartnerGROUPTYPE"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERGROUPTYPE

**Business PartnerGROUPTYPE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerGroupType` | ✓ | |  | `partgrptyp` | `CHAR(4)` | Group type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerGroupTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPGROUPTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name:'BusinessPartnerGroupType'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true    
  }
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Basic view for Business Partner Group Types'
define view I_BusinessPartnerGroupType
  as select from tb025
  association [0..*] to I_BusinessPartnerGroupTypeText as _Text on  $projection.BusinessPartnerGroupType = _Text.BusinessPartnerGroupType
{
      @ObjectModel.text.association: '_Text'
  key partgrptyp as BusinessPartnerGroupType,
      _Text
}
```
