---
name: I_CABILLGDOCITEMCRTNMETHOD
description: Cabillgdocitemcrtnmethod
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
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCITEMCRTNMETHOD

**Cabillgdocitemcrtnmethod**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgDocItemCrtnMethod` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,2 ) as billitem_crmet_kk preserving type )` |  |  |
| `_CABillgDocItemCrtnMethodText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocItemCrtnMethodText` | `I_CABillgDocItemCrtnMethodText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Erstell.methode d. Abr.bel.pos.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocItemCrtnMethod',
  sapObjectNodeType.name: 'ContrAcctgBillgDocItmCrtnMeth',
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
define view entity I_CABillgDocItemCrtnMethod
  as select from dd07l

  association [1..*] to I_CABillgDocItemCrtnMethodText as _CABillgDocItemCrtnMethodText on $projection.CABillgDocItemCrtnMethod = _CABillgDocItemCrtnMethodText.CABillgDocItemCrtnMethod
{
      @ObjectModel.text.association: '_CABillgDocItemCrtnMethodText'
  key cast ( substring( dd07l.domvalue_l,1,2 )  as billitem_crmet_kk preserving type ) as CABillgDocItemCrtnMethod,
      _CABillgDocItemCrtnMethodText
}
where
      domname  = 'BILLITEM_CRMET_KK'
  and as4local = 'A'
```
