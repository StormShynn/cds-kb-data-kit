---
name: I_SUPPLIERINVOICESTATUSAPI01
description: "Supplier InvoiceSTATUSAPI 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SUPPLIERINVOICESTATUSAPI01

**Supplier InvoiceSTATUSAPI 01**

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
| `DomainValue` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupplierInvcStatusTxtAPI01` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRINVCSTSAPI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@EndUserText.label: 'Supplier Invoice Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SupplierInvoiceStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoiceStatus'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SupplierInvoiceStatusAPI01
  as select from I_SupplierInvoiceStatus
  association [0..*] to I_SupplierInvcStatusTxtAPI01 as _Text on $projection.SupplierInvoiceStatus = _Text.SupplierInvoiceStatus
{
      @ObjectModel.text.association: '_Text'
  key SupplierInvoiceStatus,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      DomainValue,
      _Text
}
where SupplierInvoiceStatus <> 'E'
```
