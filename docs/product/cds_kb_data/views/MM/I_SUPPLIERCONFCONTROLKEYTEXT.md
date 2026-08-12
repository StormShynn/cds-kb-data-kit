---
name: I_SUPPLIERCONFCONTROLKEYTEXT
description: "Supplierconfcontrolkeytext"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - text-view
  - supplier
  - text
  - component:MM
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERCONFCONTROLKEYTEXT

**Supplierconfcontrolkeytext**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierConfirmationControlKey` | ✓ | |  | `bstae` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SupplierConfControlKeyName` |  | |  | `bsbez` |  |  |
| `_SupplierConfControlKey` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierConfControlKey` | `I_SupplierConfControlKey` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISUPLRCONFCTRLKT'
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: ['SupplierConfirmationControlKey']
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Supplier Confirmation Control Key - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SupplierConfControlKeyText
  as select from t163m

  association [1..1] to I_SupplierConfControlKey as _SupplierConfControlKey on $projection.SupplierConfirmationControlKey = _SupplierConfControlKey.SupplierConfirmationControlKey
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key bstae                                                               as SupplierConfirmationControlKey,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                               as Language,
      @Semantics.text: true
      bsbez                                                               as SupplierConfControlKeyName,
      _Language,
      _SupplierConfControlKey
}
```
