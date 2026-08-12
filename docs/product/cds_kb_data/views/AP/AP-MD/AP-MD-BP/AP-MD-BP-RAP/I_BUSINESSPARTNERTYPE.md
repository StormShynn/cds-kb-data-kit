---
name: I_BUSINESSPARTNERTYPE
description: "Business PartnerTYPE"
app_component: AP-MD-BP-RAP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_BUSINESSPARTNERTYPE

**Business PartnerTYPE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerType` | ✓ | |  | `bpkind` | `CHAR(4)` | Business Partner Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'BUPA_TYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  usageType.sizeCategory: #S,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BusinessPartnerType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Analytics: {
  dataExtraction.enabled: true,
  dataCategory: #DIMENSION,
  internalName: #LOCAL
} 
@EndUserText.label: 'Business Partner Types'
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerType'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusinessPartnerType
  as select from tb004
  association [0..*] to I_BusinessPartnerTypeText as _Text on $projection.BusinessPartnerType = _Text.BusinessPartnerType
{
      @ObjectModel.text.association: '_Text'
  key bpkind as BusinessPartnerType,
      _Text
}
```
