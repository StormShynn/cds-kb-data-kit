---
name: I_SUPPLIERINVOICEUPLOADAPI01
description: Supplier InvoiceUPLOADAPI 01
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
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERINVOICEUPLOADAPI01

**Supplier InvoiceUPLOADAPI 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierInvoiceUploadUUID` | `SupplierInvoiceUploadUUID` |
| `CompanyCode` | `CompanyCode` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `SuplrInvcUploadDescription` | `SuplrInvcUploadDescription` |
| `_CompanyCode` | *Association* |
| `_UploadedInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_UploadedInvoice` | `I_UploadedSupplierInvoiceAPI01` | [1..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISINVCUPLDAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice Upload'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.compositionRoot:true

define view I_SupplierInvoiceUploadAPI01
  as select from I_SupplierInvoiceUpload
  association [0..1] to I_CompanyCode                          as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..*] to I_UploadedSupplierInvoiceAPI01         as _UploadedInvoice  on  $projection.SupplierInvoiceUploadUUID = _UploadedInvoice.SupplierInvoiceUploadUUID
{
  key SupplierInvoiceUploadUUID,
      CompanyCode,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      CreationDateTime,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      LastChangeDateTime,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      SuplrInvcUploadDescription,
      
      //Associations
      _CompanyCode,
      @Feature: 'FT_MMIV_UPL_CDS_API'
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _UploadedInvoice
}
```
