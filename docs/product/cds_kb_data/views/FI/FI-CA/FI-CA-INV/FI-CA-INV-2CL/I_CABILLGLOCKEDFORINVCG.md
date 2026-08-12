---
name: I_CABILLGLOCKEDFORINVCG
description: "Cabillglockedforinvcg"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGLOCKEDFORINVCG

**Cabillglockedforinvcg**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgLockedForInvoicing` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as invlock_kk preserving type )` |  |  |
| `_CABillgLockedForInvcgText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgLockedForInvcgText` | `I_CABillgLockedForInvcgText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abrechnungsbeleg Fakturierungssperre'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgLockedForInvoicing',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgLock',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABillgLockedForInvcg
  as select from dd07l

  association [1..*] to I_CABillgLockedForInvcgText as _CABillgLockedForInvcgText on $projection.CABillgLockedForInvoicing = _CABillgLockedForInvcgText.CABillgLockedForInvoicing
{
      @ObjectModel.text.association: '_CABillgLockedForInvcgText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as invlock_kk preserving type ) as CABillgLockedForInvoicing,
      _CABillgLockedForInvcgText
}
where
      domname  = 'INVLOCK_KK'
  and as4local = 'A'
```
