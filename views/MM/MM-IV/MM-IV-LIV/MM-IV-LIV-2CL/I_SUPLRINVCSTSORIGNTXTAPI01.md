---
name: I_SUPLRINVCSTSORIGNTXTAPI01
description: Suplrinvcstsorigntxtapi 01
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
# I_SUPLRINVCSTSORIGNTXTAPI01

**Suplrinvcstsorigntxtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InvoiceStatusAndOrigin` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `InvoiceStatusAndOriginDesc` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'InvoiceStatusAndOrigin'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISISTORGTXTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Supplier Invoice Status and Origin - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
define view I_SuplrInvcStsOrignTxtAPI01 
  as select from I_SupplierInvoiceStsOriginText 
{
  key InvoiceStatusAndOrigin,
  @Semantics.language: true
  key Language,
  @Semantics.text: true
  @UI.hidden: true
  InvoiceStatusAndOriginDesc,
  
/* Associations */
  _Language     
}
```
