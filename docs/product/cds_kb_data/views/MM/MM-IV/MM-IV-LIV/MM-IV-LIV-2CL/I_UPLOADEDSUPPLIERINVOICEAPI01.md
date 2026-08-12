---
name: I_UPLOADEDSUPPLIERINVOICEAPI01
description: "UPLOADEDSupplier InvoiceAPI 01"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_UPLOADEDSUPPLIERINVOICEAPI01

**UPLOADEDSupplier InvoiceAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UploadedSupplierInvoiceUUID` | ✓ | |  |  |  |  |
| `SupplierInvoiceUploadUUID` |  | |  |  |  |  |
| `SupplierInvoice` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `SuplrInvcUploadDescription` |  | | `_SupplierInvoiceUploadAPI01` | `SuplrInvcUploadDescription` |  |  |
| `_SupplierInvoiceAPI01` | | ✓ | | | | |
| `_SupplierInvoiceUploadAPI01` | | ✓ | | | | |
| `_SuplrInvcUploadHistoryAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoiceAPI01` | `I_SupplierInvoiceAPI01` | [0..1] |
| `_SupplierInvoiceUploadAPI01` | `I_SupplierInvoiceUploadAPI01` | [1..1] |
| `_SuplrInvcUploadHistoryAPI01` | `I_SuplrInvcUploadHistoryAPI01` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Uploaded Supplier Invoice'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Feature: 'FT_MMIV_UPL_CDS_API'
define view entity I_UploadedSupplierInvoiceAPI01 as select from I_UploadedSupplierInvoice
  association [0..1] to I_SupplierInvoiceAPI01        as _SupplierInvoiceAPI01        on  $projection.SupplierInvoice = _SupplierInvoiceAPI01.SupplierInvoice
                                                                                      and $projection.FiscalYear      = _SupplierInvoiceAPI01.FiscalYear
  association [1..1] to I_SupplierInvoiceUploadAPI01  as _SupplierInvoiceUploadAPI01  on $projection.SupplierInvoiceUploadUUID = _SupplierInvoiceUploadAPI01.SupplierInvoiceUploadUUID
  association [1..*] to I_SuplrInvcUploadHistoryAPI01 as _SuplrInvcUploadHistoryAPI01 on $projection.UploadedSupplierInvoiceUUID = _SuplrInvcUploadHistoryAPI01.UploadedSupplierInvoiceUUID
{
  key UploadedSupplierInvoiceUUID,
      SupplierInvoiceUploadUUID,
      SupplierInvoice,
      FiscalYear,
      _SupplierInvoiceUploadAPI01.SuplrInvcUploadDescription,
      
      _SupplierInvoiceAPI01,
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
      _SupplierInvoiceUploadAPI01,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _SuplrInvcUploadHistoryAPI01
}
```
