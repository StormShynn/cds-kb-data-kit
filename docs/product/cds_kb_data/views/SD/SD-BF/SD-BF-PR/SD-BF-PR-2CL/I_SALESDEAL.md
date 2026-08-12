---
name: I_SALESDEAL
description: "This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?"
semantic_vi: "Sales Deal — CDS view giao diện dựa trên kona."
keywords:
  - "sales"
  - "deal"
  - "organization"
  - "distribution"
  - "channel"
  - "division"
  - "type"
tags:
  - SD
  - bo:plant
  - component:SD-BF-PR-2CL
  - interface-view
  - lob:sales & distribution
  - SD-BF
  - SD-BF-PR
  - SD-BF-PR-2CL
  - bo:salesorganization
---
# I_SALESDEAL

**This CDS view provides the prerequisites for answering the following business questions: What is the description of sales deal? What is the type of sales deal? What is the sales organization or distribution channel of sales deal? What is the validity period of sales deal?**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDeal` | ✓ | |  | `knuma` | `CHAR(10)` | Agreement (various conditions grouped together) |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  | `spart` | `CHAR(2)` | Division |
| `SalesDealType` |  | |  | `boart` | `CHAR(4)` | Agreement type |
| `SalesDealValidityStartDate` |  | |  | `datab` | `DATS(8)` | Agreement valid-from date |
| `SalesDealValidityEndDate` |  | |  | `datbi` | `DATS(8)` | Agreement valid-to date |
| `SalesDealDescription` |  | |  | `botext` | `CHAR(40)` | Description of agreement (e.g. sales deal, promotion) |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEAL')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SalesDeal'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@EndUserText.label: 'Sales Deal'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.sqlViewName: 'ISDSALESDEAL'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true

define view I_SalesDeal
as select from kona

//Association
association [0..1] to I_SalesOrganization   as _SalesOrganization   on $projection.SalesOrganization   = _SalesOrganization.SalesOrganization
association [0..1] to I_DistributionChannel as _DistributionChannel on $projection.DistributionChannel = _DistributionChannel.DistributionChannel
association [0..1] to I_Division            as _Division            on $projection.Division            = _Division.Division

{
    //Key
    key knuma as  SalesDeal,

    //Organization
    @ObjectModel.foreignKey.association: '_SalesOrganization'
    vkorg     as  SalesOrganization,
    @ObjectModel.foreignKey.association: '_DistributionChannel'
    vtweg     as  DistributionChannel,
    @ObjectModel.foreignKey.association: '_Division'
    spart     as  Division,
    
    boart     as  SalesDealType,
    datab     as  SalesDealValidityStartDate,
    datbi     as  SalesDealValidityEndDate,
    botext    as  SalesDealDescription,

    //Association
    _SalesOrganization,
    _DistributionChannel,
    _Division
}
where abtyp = 'C'
```
