---
name: I_CABILLGLOCKEDFORINVCGTEXT
description: Cabillglockedforinvcgtext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGLOCKEDFORINVCGTEXT

**Cabillglockedforinvcgtext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgLockedForInvoicing` | `cast ( substring( dd07t.domvalue_l,1,1 ) as invlock_kk preserving type )` |
| key `Language` | `cast ( ddlanguage as spras preserving type )` |
| `CABillgLockedForInvcgText` | `cast ( ddtext as invlock_txt_gfn_kk preserving type )` |
| `_CABillgLockedForInvcg` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgLockedForInvcg` | `I_CABillgLockedForInvcg` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Abr.beleg Fakturierungssperre - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgLockedForInvoicing',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgLockTxt',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgLockedForInvcgText
  as select from dd07t
  association [1..1] to I_CABillgLockedForInvcg as _CABillgLockedForInvcg on $projection.CABillgLockedForInvoicing = _CABillgLockedForInvcg.CABillgLockedForInvoicing
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgLockedForInvcg'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as invlock_kk preserving type ) as CABillgLockedForInvoicing,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                             as Language,
      @Semantics.text
      cast ( ddtext as invlock_txt_gfn_kk preserving type )                    as CABillgLockedForInvcgText,

      _CABillgLockedForInvcg,
      _Language
}
where
      domname  = 'INVLOCK_KK'
  and as4local = 'A'
```
