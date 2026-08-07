---
name: I_BUSINESSPARTNERADDRESSTYPET
description: Business PartnerADDRESSTYPET
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
  - address
  - partner
  - component:AP-MD-BP-RAP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERADDRESSTYPET

**Business PartnerADDRESSTYPET**

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
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AddressUsageName` |  | |  | `textlong` | `CHAR(40)` | Name of Address Type |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRTYPETXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Business Partner Address Types Text'
@ObjectModel: {
  representativeKey: 'AddressType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
define view I_BusinessPartnerAddressTypeT
  as select from tb010
{
      @semanticKey: true
  key adr_kind  as AddressType,
      @Semantics.language:true
  key spras     as Language,
      @Semantics.text: true
      @EndUserText.label: 'Description'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      textlong as AddressUsageName
}
```
