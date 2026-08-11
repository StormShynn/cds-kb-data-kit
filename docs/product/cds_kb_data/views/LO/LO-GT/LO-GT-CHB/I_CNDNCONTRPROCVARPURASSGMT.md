---
name: I_CNDNCONTRPROCVARPURASSGMT
description: "This CDS view retrieves the purchasing organizations and company codes assigned to the process variant."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value
semantic_en: "This CDS view retrieves the purchasing organizations and company codes assigned to the process variant."
semantic_vi: "Cndn Contr Process Var Pur Org Assgmt — CDS view cơ bản dựa trên wcb_c_proc_var_e."
keywords:
  - "cndn"
  - "contr"
  - "process"
  - "var"
  - "pur"
  - "org"
  - "assgmt"
  - "proc"
  - "purchasing"
  - "organization"
  - "company"
  - "code"
tags:
  - LO
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRPROCVARPURASSGMT

**This CDS view retrieves the purchasing organizations and company codes assigned to the process variant.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrProcVar` | ✓ | |  | `process_variant` | `CHAR(4)` | Condition Contract Process Variant |
| `PurchasingOrganization` | ✓ | |  | `ekorg` | `CHAR(4)` | Purchasing Organization |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcVar` | `I_CndnContrProcVar` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRPROCVARPURASSGMT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'IWCBPROCVARPOASG',
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
@EndUserText.label: 'Cndn Contr Process Var Pur Org Assgmt'
@Metadata.ignorePropagatedAnnotations: true
define view I_CndnContrProcVarPurAssgmt
  as select from wcb_c_proc_var_e
  association [0..1] to I_CndnContrProcVar       as _CndnContrProcVar       on $projection.CndnContrProcVar = _CndnContrProcVar.CndnContrProcVar
  association [0..1] to I_PurchasingOrganization as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_CompanyCode            as _CompanyCode            on $projection.CompanyCode = _CompanyCode.CompanyCode
{
  key process_variant       as CndnContrProcVar,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
  key ekorg                 as PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption: {
       valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
       }
  key bukrs                 as CompanyCode,

      /*Associations*/
      _CndnContrProcVar,
      _PurchasingOrganization,
      _CompanyCode
}
```
