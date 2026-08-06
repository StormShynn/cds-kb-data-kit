---
name: I_RPTVMFGCONFMATLDOCHNDLGUNTTP
description: Rptvmfgconfmatldochndlgunttp
app_component: PP-REM-ADE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-REM
  - PP-REM-ADE
  - interface-view
  - transactional-processing
  - component:PP-REM-ADE-2CL
  - lob:Manufacturing
---
# I_RPTVMFGCONFMATLDOCHNDLGUNTTP

**Rptvmfgconfmatldochndlgunttp**

| Property | Value |
|---|---|
| App Component | `PP-REM-ADE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RepetitiveMfgConfirmation` | `RepetitiveMfgConfirmation` |
| key `MaterialDocument` | `MaterialDocument` |
| key `MaterialDocumentYear` | `MaterialDocumentYear` |
| key `MaterialDocumentItem` | `MaterialDocumentItem` |
| key `HandlingUnitExternalID` | `HandlingUnitExternalID` |
| key `HandlingUnitItem` | `HandlingUnitItem` |
| `ConfirmationPlant` | `ConfirmationPlant` |
| `Plant` | `Plant` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `_Customer` | *Association* |
| `_CustomerCompanyByPlant` | *Association* |
| `_Supplier` | *Association* |
| `_SupplierCompanyByPlant` | *Association* |
| `_RepetitiveMfgConfirmationTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Handling Units for Confirmation - TP'
@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

define view entity I_RptvMfgConfMatlDocHndlgUntTP as projection on R_RptvMfgConfMatlDocHndlgUntTP {
  key RepetitiveMfgConfirmation,
  key MaterialDocument,
  key MaterialDocumentYear,
  key MaterialDocumentItem,
  key HandlingUnitExternalID,
  key HandlingUnitItem,
  ConfirmationPlant,
  Plant,
  Customer,
  Supplier,
  /* Associations */
  _Customer,
  _CustomerCompanyByPlant,
  _Supplier,
  _SupplierCompanyByPlant,
  _RepetitiveMfgConfirmationTP : redirected to parent I_RepetitiveMfgConfirmationTP
}
```
