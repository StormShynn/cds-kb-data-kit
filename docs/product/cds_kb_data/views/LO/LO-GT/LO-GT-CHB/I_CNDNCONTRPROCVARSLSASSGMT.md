---
name: I_CNDNCONTRPROCVARSLSASSGMT
description: "This CDS view retrieves the sales area assigned to the process variant."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value
semantic_en: "This CDS view retrieves the sales area assigned to the process variant."
semantic_vi: "Process Variant Sales Area Assgmt — CDS view cơ bản dựa trên wcb_c_proc_var_v."
keywords:
  - "process"
  - "variant"
  - "sales"
  - "area"
  - "assgmt"
  - "cndn"
  - "contr"
  - "proc"
  - "organization"
  - "distribution"
  - "channel"
  - "division"
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPROCVARSLSASSGMT

**This CDS view retrieves the sales area assigned to the process variant.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  | `process_variant` | `CHAR(4)` | Condition Contract Process Variant |
| `SalesOrganization` | ✓ | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | ✓ | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Division` | ✓ | |  | `spart` | `CHAR(2)` | Division |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcVar` | `I_CndnContrProcVar` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARSLSASSGMT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWCBPROCVARSDASG',
  compiler.compareFilter: true,
  buffering: {
    status: #ACTIVE,
    type: #GENERIC,
    numberOfKeyFields: 001
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  representativeKey: 'CndnContrProcVar',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@ClientHandling: {
  type: #INHERITED,
  algorithm: #SESSION_VARIABLE
}
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL
}
@EndUserText.label: 'Process Variant Sales Area Assgmt'
@Metadata.ignorePropagatedAnnotations: true
define view I_CndnContrProcVarSlsAssgmt
  as select from wcb_c_proc_var_v
  association [0..1] to I_CndnContrProcVar    as _CndnContrProcVar    on $projection.CndnContrProcVar = _CndnContrProcVar.CndnContrProcVar
  association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Division            as _Division            on $projection.Division = _Division.Division
{
  key process_variant       as CndnContrProcVar,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key vkorg                 as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key vtweg                 as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
  key spart                 as Division,

      /*Associations*/
      _CndnContrProcVar,
      _SalesOrganization,
      _DistributionChannel,
      _Division
}
```
