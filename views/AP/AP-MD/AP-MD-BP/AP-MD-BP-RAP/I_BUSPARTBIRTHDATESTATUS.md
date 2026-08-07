---
name: I_BUSPARTBIRTHDATESTATUS
description: Business PartnerBIRTHDATESTATUS
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
  - status
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTBIRTHDATESTATUS

**Business PartnerBIRTHDATESTATUS**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerBirthDateStatus` | ✓ | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusPartBirthDateStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPBIRTHSTATUS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType.sizeCategory: #M,
  usageType.serviceQuality: #A,
  usageType.dataClass: #META,
  resultSet.sizeCategory: #XS,
  representativeKey: 'BusinessPartnerBirthDateStatus',
  sapObjectNodeType.name: 'BusinessPartnerBirthDateStatus',
  modelingPattern: #NONE,
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Business Partner Birth Date status'
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartBirthDateStatus
  as select  from dd07l
  association [0..*] to I_BusPartBirthDateStatusText as _Text on $projection.BusinessPartnerBirthDateStatus = _Text.BusinessPartnerBirthDateStatus
{     @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH     
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Birth Date Status'
      key domvalue_l           as BusinessPartnerBirthDateStatus,
      _Text
}
where
  domname = 'BU_BIRTHDT_STATUS'
  and domvalue_l  <> ' ' 
  and  domvalue_l  <> ''
```
