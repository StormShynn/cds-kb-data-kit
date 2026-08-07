---
name: I_CABILLGPLNITMAMTDATETYPE
description: Cabillgplnitmamtdatetype
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITMAMTDATETYPE

**Cabillgplnitmamtdatetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnItemAmountDateType` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type )` |  |  |
| `_CABillgPlnItmAmtDateTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmAmtDateTypeText` | `I_CABillgPlnItmAmtDateTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abr Pln Art des Betragsermittlungsdatums'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItemAmountDateType',
  sapObjectNodeType.name: 'CABillgPlnItmAmtDateType',
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
define view entity I_CABillgPlnItmAmtDateType
  as select from dd07l

  association [1..*] to I_CABillgPlnItmAmtDateTypeText as _CABillgPlnItmAmtDateTypeText on $projection.CABillgPlnItemAmountDateType = _CABillgPlnItmAmtDateTypeText.CABillgPlnItemAmountDateType
{
      @ObjectModel.text.association: '_CABillgPlnItmAmtDateTypeText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as bip_amount_date_type_kk preserving type ) as CABillgPlnItemAmountDateType,
      _CABillgPlnItmAmtDateTypeText
}
where
      domname  = 'BIP_AMOUNT_DATE_TYPE_KK'
  and as4local = 'A'
```
