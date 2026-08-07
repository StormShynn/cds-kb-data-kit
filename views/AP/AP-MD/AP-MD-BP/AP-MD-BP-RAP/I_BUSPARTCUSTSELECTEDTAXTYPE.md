---
name: I_BUSPARTCUSTSELECTEDTAXTYPE
description: "Business PartnerCUSTSELECTEDTAXTYPE"
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
  - tax
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTCUSTSELECTEDTAXTYPE

**Business PartnerCUSTSELECTEDTAXTYPE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxType` | ✓ | |  | `taxtype` | `CHAR(4)` | Tax Number Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartTaxTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCUSTTAXTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Tax Number Categories'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BPTaxType',
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'BusinessPartnerTaxType',
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}

@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartCustSelectedTaxType
  as select from tfktaxnumtype_c
  association [0..*] to I_BusPartTaxTypeText as _Text on $projection.BPTaxType = _Text.BPTaxType
{
      @ObjectModel.text.association: '_Text'
  key taxtype as BPTaxType,
      _Text
}
```
