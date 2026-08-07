---
name: I_BUSPARTTAXTYPETEXT
description: Business PartnerTAXTYPETEXT
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
  - text-view
  - business-partner
  - tax
  - text
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BUSPARTTAXTYPETEXT

**Business PartnerTAXTYPETEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BPTaxType` | ✓ | |  | `taxtype` | `CHAR(4)` | Tax Number Category |
| `TaxTypeName` |  | |  | `text` | `CHAR(40)` | Name: Business Partner Tax Number Categories |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPTAXTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Business Partner Tax Type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
  representativeKey: 'BPTaxType',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory : #M,
  usageType.dataClass: #CUSTOMIZING,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
define view I_BusPartTaxTypeText
  as select from tfktaxnumtype_t
{
      @Semantics.language: true
  key spras   as Language,
  key taxtype as BPTaxType,
      @Semantics.text: true
      @EndUserText.label: 'Tax Category Description'
      @UI.identification:[{label: 'Tax Category Description'}]
      text    as TaxTypeName
}
```
