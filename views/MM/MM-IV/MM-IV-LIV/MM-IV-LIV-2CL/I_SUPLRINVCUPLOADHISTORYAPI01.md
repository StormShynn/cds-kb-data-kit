---
name: I_SUPLRINVCUPLOADHISTORYAPI01
description: Suplrinvcuploadhistoryapi 01
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCUPLOADHISTORYAPI01

**Suplrinvcuploadhistoryapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierInvoiceUploadFileUUID` | `SupplierInvoiceUploadFileUUID` |
| `SupplierInvoiceUploadUUID` | `SupplierInvoiceUploadUUID` |
| `UploadedSupplierInvoiceUUID` | `UploadedSupplierInvoiceUUID` |
| `SuplrInvcUpldFileLifeCycStatus` | `SuplrInvcUpldFileLifeCycStatus` |
| `FileName` | `FileName` |
| `CompanyCode` | `_Upload.CompanyCode` |
| `_UploadedSupplierInvoiceAPI01` | *Association* |
| `_SupplierInvoiceUploadAPI01` | *Association* |
| `_LifecycleStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UploadedSupplierInvoiceAPI01` | `I_UploadedSupplierInvoiceAPI01` | [1..1] |
| `_SupplierInvoiceUploadAPI01` | `I_SupplierInvoiceUploadAPI01` | [1..1] |
| `_LifecycleStatusText` | `I_UpldFileLifeCycStsAPI01Text` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice Upload History Records'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Feature: 'FT_MMIV_UPL_CDS_API'
define view entity I_SuplrInvcUploadHistoryAPI01 as select from I_SupplierInvoiceUploadHistory
  association [1..1] to I_UploadedSupplierInvoiceAPI01   as _UploadedSupplierInvoiceAPI01     on  $projection.UploadedSupplierInvoiceUUID = _UploadedSupplierInvoiceAPI01.UploadedSupplierInvoiceUUID
  association [1..1] to I_SupplierInvoiceUploadAPI01     as _SupplierInvoiceUploadAPI01       on  $projection.SupplierInvoiceUploadUUID = _SupplierInvoiceUploadAPI01.SupplierInvoiceUploadUUID
  association [1..1] to I_UpldFileLifeCycStsAPI01Text    as _LifecycleStatusText on  $projection.SuplrInvcUpldFileLifeCycStatus = _LifecycleStatusText.SuplrInvcUpldFileLifeCycStatus
                                                                                 and _LifecycleStatusText.Language              = $session.system_language
{
  key SupplierInvoiceUploadFileUUID,
  SupplierInvoiceUploadUUID,
  UploadedSupplierInvoiceUUID,
  
  @ObjectModel.text.association: '_LifecycleStatusText'
  @Semantics.text: true
  SuplrInvcUpldFileLifeCycStatus,
  FileName,
  
  _Upload.CompanyCode,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
  _UploadedSupplierInvoiceAPI01,
  @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
  _SupplierInvoiceUploadAPI01,
  _LifecycleStatusText
}
```
