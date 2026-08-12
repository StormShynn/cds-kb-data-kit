---
name: I_SUPPLIERINVCSTATUSTXTAPI01
description: "Supplierinvcstatustxtapi 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - supplier
  - status
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVCSTATUSTXTAPI01

**Supplierinvcstatustxtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierInvoiceStatus` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `DomainValue` |  | |  |  |  |  |
| `SupplierInvoiceStatusDesc` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |
| `_SupplierInvoiceStatusAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SupplierInvoiceStatusAPI01` | `I_SupplierInvoiceStatusAPI01` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRINVSTSTAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Invoice Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name:'SupplierInvoiceStatusText'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'SupplierInvoiceStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_SupplierInvcStatusTxtAPI01
  as select from I_SupplierInvoiceStatusText
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_SupplierInvoiceStatusAPI01 as _SupplierInvoiceStatusAPI01 on $projection.SupplierInvoiceStatus = _SupplierInvoiceStatusAPI01.SupplierInvoiceStatus
{
      @ObjectModel.foreignKey.association: '_SupplierInvoiceStatusAPI01'
      @ObjectModel.text.element: ['SupplierInvoiceStatusDesc']
  key SupplierInvoiceStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      SupplierInvoiceStatusDesc,
      
      _Language,
      _SupplierInvoiceStatusAPI01
}
where SupplierInvoiceStatus <> 'E'
```
