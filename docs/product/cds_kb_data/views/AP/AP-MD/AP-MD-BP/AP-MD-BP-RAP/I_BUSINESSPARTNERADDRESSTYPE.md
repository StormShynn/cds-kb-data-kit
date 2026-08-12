---
name: I_BUSINESSPARTNERADDRESSTYPE
description: "Business PartnerADDRESSTYPE"
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
  - address
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSTYPE

**Business PartnerADDRESSTYPE**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressType` | ✓ | |  | `adr_kind` | `CHAR(10)` | Address Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusinessPartnerAddressTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Address Types'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  representativeKey: 'AddressType',
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ,
                           #EXTRACTION_DATA_SOURCE ],
  sapObjectNodeType.name: 'BPAddressUsageCode'
}
                                     
define view I_BusinessPartnerAddressType
  as select from tb009
  association [0..*] to I_BusinessPartnerAddressTypeT as _Text on $projection.AddressType = _Text.AddressType   
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key adr_kind as AddressType,
      //      xmult
  _Text
}
```
