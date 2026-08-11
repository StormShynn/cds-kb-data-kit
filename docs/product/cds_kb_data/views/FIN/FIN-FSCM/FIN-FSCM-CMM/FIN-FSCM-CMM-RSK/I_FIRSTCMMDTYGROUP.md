---
name: I_FIRSTCMMDTYGROUP
description: "First Customer Specific Commodity Group"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUP')/$value
semantic_en: "First Customer Specific Commodity Group"
semantic_vi: "First Customer Specific Commodity Group — CDS view giao diện dựa trên trcoc_cty_group1."
keywords:
  - "first"
  - "customer"
  - "specific"
  - "commodity"
  - "group"
  - "cust"
  - "cmmdty"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CMM-RSK
  - customer
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_FIRSTCMMDTYGROUP

**First Customer Specific Commodity Group**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FirstCustSpecificCmmdtyGroup` | ✓ | |  | `group_id` | `CHAR(3)` | Commodity Group1 |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FirstCmmdtyGroupText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIRSTCMMDTYGROUP')/$value)*

```abap
@EndUserText.label: 'First Customer Specific Commodity Group'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'IFIRSTCMMDTYGRP'
@ObjectModel.representativeKey: 'FirstCustSpecificCmmdtyGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_FirstCmmdtyGroup
   as select from trcoc_cty_group1

   association [1..*] to I_FirstCmmdtyGroupText as _Text
       on $projection.FirstCustSpecificCmmdtyGroup = _Text.FirstCustSpecificCmmdtyGroup
{
@ObjectModel.text.association: '_Text'

    key group_id as FirstCustSpecificCmmdtyGroup,
    _Text
}
```
