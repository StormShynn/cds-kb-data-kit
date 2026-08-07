---
name: I_CABILLGPLNITMPRCDATETYPE
description: Cabillgplnitmprcdatetype
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
# I_CABILLGPLNITMPRCDATETYPE

**Cabillgplnitmprcdatetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnItemPriceDateType` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as bip_price_date_type_kk preserving type )` |  |  |
| `_CABillgPlnItmPrcDateTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnItmPrcDateTypeText` | `I_CABillgPlnItmPrcDateTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Abr Pln Art des Preisfindungsdatums'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItemPriceDateType',
  sapObjectNodeType.name: 'CABillgPlnItmPrcDateType',
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
define view entity I_CABillgPlnItmPrcDateType
  as select from dd07l

  association [1..*] to I_CABillgPlnItmPrcDateTypeText as _CABillgPlnItmPrcDateTypeText on $projection.CABillgPlnItemPriceDateType = _CABillgPlnItmPrcDateTypeText.CABillgPlnItemPriceDateType
{
      @ObjectModel.text.association: '_CABillgPlnItmPrcDateTypeText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as bip_price_date_type_kk preserving type ) as CABillgPlnItemPriceDateType,
      _CABillgPlnItmPrcDateTypeText
}
where
      domname  = 'BIP_PRICE_DATE_TYPE_KK'
  and as4local = 'A'
```
