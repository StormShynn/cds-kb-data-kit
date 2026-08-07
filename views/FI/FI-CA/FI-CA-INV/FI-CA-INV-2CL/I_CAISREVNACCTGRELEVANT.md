---
name: I_CAISREVNACCTGRELEVANT
description: Caisrevnacctgrelevant
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
# I_CAISREVNACCTGRELEVANT

**Caisrevnacctgrelevant**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAIsRevenueAccountingRelevant` | ✓ | |  | `cast ( substring( dd07l.domvalue_l,1,1 ) as rarel_kk preserving type )` |  |  |
| `_CAIsRevnAcctgRelevantText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIsRevnAcctgRelevantText` | `I_CAIsRevnAcctgRelevantText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Relevant für Erlösbuchhaltung'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CAIsRevenueAccountingRelevant',
  sapObjectNodeType.name: 'ContrAcctgIsRevnAcctgRelevant',
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

define view entity I_CAIsRevnAcctgRelevant
  as select from dd07l

  association [1..*] to I_CAIsRevnAcctgRelevantText as _CAIsRevnAcctgRelevantText on $projection.CAIsRevenueAccountingRelevant = _CAIsRevnAcctgRelevantText.CAIsRevenueAccountingRelevant
{
      @ObjectModel.text.association: '_CAIsRevnAcctgRelevantText'
  key cast ( substring( dd07l.domvalue_l,1,1 ) as rarel_kk preserving type ) as CAIsRevenueAccountingRelevant,
      _CAIsRevnAcctgRelevantText
}
where
      domname  = 'RAREL_KK'
  and as4local = 'A'
```
