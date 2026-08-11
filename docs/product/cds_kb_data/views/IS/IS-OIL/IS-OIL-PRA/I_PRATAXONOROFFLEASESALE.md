---
name: I_PRATAXONOROFFLEASESALE
description: "PRA Tax On Or Off Lease Sale"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXONOROFFLEASESALE')/$value
semantic_en: "PRA Tax On Or Off Lease Sale"
semantic_vi: "PRA Tax On Or Off Lease Sale — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tax"
  - "off"
  - "lease"
  - "sale"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXONOROFFLEASESALE

**PRA Tax On Or Off Lease Sale**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXONOROFFLEASESALE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OnOrOffLeaseSale` | ✓ | |  | `cast( domvalue_l as oiux3_tx_off_lease_code )` | `CHAR(1)` | Texas On-/Off-Lease Sale Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxOnOrOffLeaseSaleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXONOROFFLEASESALE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXONOROFFLEASESALE')/$value)*

```abap
@EndUserText.label: 'PRA Tax On Or Off Lease Sale'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONOFFLSSL'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OnOrOffLeaseSale'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxOffLeaseCode'

define view I_PRATaxOnOrOffLeaseSale
  as select from dd07l
  association [0..*] to I_PRATaxOnOrOffLeaseSaleText as _Text on $projection.OnOrOffLeaseSale = _Text.OnOrOffLeaseSale
{
      @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as oiux3_tx_off_lease_code )   as OnOrOffLeaseSale,
      _Text
}
where
      domname  = 'OIUX3_TX_OFF_LEASE_CODE'
  and as4local = 'A';
```
