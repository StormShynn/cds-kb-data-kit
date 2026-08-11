---
name: I_SETTLMTAPPLSTSGRP
description: "This CDS view is used to select the settlement application status group."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRP')/$value
semantic_en: "This CDS view is used to select the settlement application status group."
semantic_vi: "Settlement Application Status Group — CDS view cơ bản dựa trên R_SettlmtApplStsGrp."
keywords:
  - "settlement"
  - "application"
  - "status"
  - "group"
  - "settlmt"
  - "appl"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_SETTLMTAPPLSTSGRP

**This CDS view is used to select the settlement application status group.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtApplStsGrp` | ✓ | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTAPPLSTSGRP')/$value)*

```abap
@EndUserText.label: 'Settlement Application Status Group' 
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtApplStsGrp',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFSMTSTGP'
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_SettlmtApplStsGrp
  as select from R_SettlmtApplStsGrp
  
  composition [0..*] of I_SettlmtApplStsGrpText as _Text 
  
{
      @ObjectModel.text.association: '_Text'
  key SettlmtApplStsGrp,

      /* Associations */
      _Text
}
```
