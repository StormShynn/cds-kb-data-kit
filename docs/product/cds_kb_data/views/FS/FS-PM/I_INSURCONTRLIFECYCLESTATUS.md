---
name: I_INSURCONTRLIFECYCLESTATUS
description: "Life Cycle Sts for Contr in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUS')/$value
semantic_en: "Life Cycle Sts for Contr in Insur Plcy"
semantic_vi: "Life Cycle Sts for Contr in Insur Plcy — CDS view cơ bản dựa trên dd07l."
keywords:
  - "life"
  - "cycle"
  - "sts"
  - "for"
  - "contr"
  - "insur"
  - "plcy"
  - "domain"
  - "value"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURCONTRLIFECYCLESTATUS

**Life Cycle Sts for Contr in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurContrLifeCycSts` | ✓ | |  | `cast( dd07l.domvalue_l as /pm0/abd_actinactst_cd )` | `NUMC(3)` | Active/Inactive Status of Contract |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRLIFECYCLESTATUS')/$value)*

```abap
@EndUserText.label: 'Life Cycle Sts for Contr in Insur Plcy'
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IContrLifeCycSts'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'InsurContrLifeCycSts',
  sapObjectNodeType.name: 'InsurContractLifeCycleStatus',
  resultSet.sizeCategory: #XS,
  usageType.serviceQuality: #A,
  usageType.dataClass: #CUSTOMIZING,
  usageType.sizeCategory: #S,
  supportedCapabilities: [#ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER]
}
@Search.searchable: true

define root view entity I_InsurContrLifeCycleStatus
  as select from dd07l
  composition [0..*] of I_InsurContrLifeCycleStatusT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as /pm0/abd_actinactst_cd ) as InsurContrLifeCycSts,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                   as DomainValue,

      _Text
}
where
      dd07l.domname  = '/PM0/ABD_ACTINACTST_CD'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
