---
name: I_INSURPLCYBUSPROCESSTYPE
description: "Business Process Type in Insur Policy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPE')/$value
semantic_en: "Business Process Type in Insur Policy"
semantic_vi: "Business Process Type in Insur Policy — CDS view cơ bản dựa trên Business Process Type in Insur Policy."
keywords:
  - "business"
  - "process"
  - "type"
  - "insur"
  - "policy"
  - "plcy"
  - "proc"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYBUSPROCESSTYPE

**Business Process Type in Insur Policy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyBusProcType` | ✓ | |  | `bizprc_id` | `CHAR(5)` | Business Process |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYBUSPROCESSTYPE')/$value)*

```abap
@EndUserText.label: 'Business Process Type in Insur Policy'
@ObjectModel:{
    representativeKey: 'InsurPlcyBusProcType',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPBusProcType'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurPlcyBusProcessType
  as select from /pm0/abuubizpro
  composition [0..*] of I_InsurPlcyBusProcessTypeT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key bizprc_id as InsurPlcyBusProcType,

      _Text
}
```
