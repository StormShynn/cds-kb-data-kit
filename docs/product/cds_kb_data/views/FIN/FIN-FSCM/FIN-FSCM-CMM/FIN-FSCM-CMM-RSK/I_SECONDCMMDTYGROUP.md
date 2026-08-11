---
name: I_SECONDCMMDTYGROUP
description: "Second Customer Specific Commodity Group"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUP')/$value
semantic_en: "Second Customer Specific Commodity Group"
semantic_vi: "Second Customer Specific Commodity Group — CDS view giao diện dựa trên trcoc_cty_group2."
keywords:
  - "second"
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
# I_SECONDCMMDTYGROUP

**Second Customer Specific Commodity Group**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecondCustSpecificCmmdtyGroup` | ✓ | |  | `group_id` | `CHAR(3)` | Commodity Group2 |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SecondCmmdtyGroupText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SECONDCMMDTYGROUP')/$value)*

```abap
@EndUserText.label: 'Second Customer Specific Commodity Group'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'ISECNDCMMDTYGRP'
@ObjectModel.representativeKey: 'SecondCustSpecificCmmdtyGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_SecondCmmdtyGroup
   as select from trcoc_cty_group2

   association [1..*] to I_SecondCmmdtyGroupText as _Text
       on $projection.SecondCustSpecificCmmdtyGroup = _Text.SecondCustSpecificCmmdtyGroup
{
@ObjectModel.text.association: '_Text'

    key group_id as SecondCustSpecificCmmdtyGroup,
    _Text
}
```
