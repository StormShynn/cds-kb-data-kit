---
name: I_SUPPLIERCONFCONTROLKEY
description: Supplierconfcontrolkey
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - supplier
  - component:MM
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# I_SUPPLIERCONFCONTROLKEY

**Supplierconfcontrolkey**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SupplierConfirmationControlKey` | `bstae` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupplierConfControlKeyText` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISUPLCONFCTRLK'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: ['SupplierConfirmationControlKey']
@ObjectModel.sapObjectNodeType.name: 'SupplierConfirmationControlKey'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Control Key for Supplier Confirmation'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SupplierConfControlKey
  as select from t163l

  association [0..1] to I_SupplierConfControlKeyText as _Text on  _Text.SupplierConfirmationControlKey = $projection.SupplierConfirmationControlKey
                                                              and _Text.Language                       = $session.system_language
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true }
      key bstae                                                               as SupplierConfirmationControlKey,

      _Text
}
```
