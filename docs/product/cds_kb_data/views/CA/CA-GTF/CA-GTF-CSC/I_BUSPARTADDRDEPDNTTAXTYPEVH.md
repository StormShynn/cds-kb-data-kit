---
name: I_BUSPARTADDRDEPDNTTAXTYPEVH
description: "Business PartnerADDRDEPDNTTAXTYPEVH"
app_component: CA-GTF-CSC
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - business-partner
  - tax
  - component:CA-GTF-CSC
  - lob:Cross-Application Components
---
# I_BUSPARTADDRDEPDNTTAXTYPEVH

**Business PartnerADDRDEPDNTTAXTYPEVH**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BPTaxType` | ✓ | |  | `taxtype` |  |  |
| `BPTaxTypeName` |  | |  | `text` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADTAXTYPEVH'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.dataCategory: #VALUE_HELP
//@ObjectModel.representativeKey: 'BPTaxType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Search.searchable: true
@VDM.viewType: #BASIC

@EndUserText.label: 'BP Address Dependent Tax Category'

define view I_BusPartAddrDepdntTaxTypeVH
  as select from bptaxtypeadr_f4h
{
      @Search.defaultSearchElement: true
  key taxtype as BPTaxType,
      @EndUserText.label: 'Tax Category Description'
      @UI.identification.label: 'Tax Category Description'
      text as BPTaxTypeName
}
where spras = $session.system_language
```
