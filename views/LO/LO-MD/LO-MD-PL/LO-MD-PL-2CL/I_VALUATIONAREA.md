---
name: I_VALUATIONAREA
description: Valuationarea
app_component: LO-MD-PL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-PL
  - interface-view
  - component:LO-MD-PL-2CL
  - lob:Logistics General
---
# I_VALUATIONAREA

**Valuationarea**

| Property | Value |
|---|---|
| App Component | `LO-MD-PL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ValuationArea` | ✓ | |  | `bwkey` |
| `CompanyCode` |  | |  | `bukrs` |
| `_CompanyCode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation Area'
@ObjectModel: {
  representativeKey: 'ValuationArea',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE],
  sapObjectNodeType.name: 'ValuationArea'
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@Analytics: {
  dataExtraction.enabled: true,
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  technicalName: 'IVALUATIONAREA'
}
define view entity I_ValuationArea
  as select from t001k
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
  key bwkey as ValuationArea,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs as CompanyCode,

      _CompanyCode
}
```
