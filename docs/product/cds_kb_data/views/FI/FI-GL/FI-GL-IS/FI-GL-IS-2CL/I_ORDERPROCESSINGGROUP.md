---
name: I_ORDERPROCESSINGGROUP
description: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value
semantic_en: "This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?"
semantic_vi: "Order Processing Group — CDS view giao diện dựa trên tko08."
keywords:
  - "order"
  - "processing"
  - "group"
  - "controlling"
  - "area"
  - "procg"
  - "settlmt"
  - "cost"
  - "acct"
tags:
  - FI
  - bo:plant
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - order
---
# I_ORDERPROCESSINGGROUP

**This CDS view provides general information about order processing group text. It includes information about controlling area, order processing group, language, order processing group name. This CDS view provides the prerequisites for answering the following business questions: What/How many order processing groups does certain controlling area have? What’s the name for each order processing group in different languages?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `OrderProcessingGroup` | ✓ | |  | `abkrs` | `NUMC(2)` | Processing Group |
| `OrdProcgGrpForSettlmtToCostCtr` |  | |  | `aumlg` | `CHAR(1)` | Identifier for Settlement to Cost Center |
| `OrdProcgGrpForSettlmtToGLAcct` |  | |  | `asach` | `CHAR(1)` | Flag for Settlement to G/L Account |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_OrderProcessingGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIORDPROCGGRP'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: false }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Order Processing Group'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'OrderProcessingGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET]

define view I_OrderProcessingGroup
  as select from tko08
  association [0..1] to I_ControllingArea          as _ControllingArea on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_OrderProcessingGroupText as _Text            on  $projection.ControllingArea      = _Text.ControllingArea
                                                                       and $projection.OrderProcessingGroup = _Text.OrderProcessingGroup

{
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key kokrs as ControllingArea,
  key abkrs as OrderProcessingGroup,
      aumlg as OrdProcgGrpForSettlmtToCostCtr,
      asach as OrdProcgGrpForSettlmtToGLAcct,

      _ControllingArea,
      _Text

}
```
