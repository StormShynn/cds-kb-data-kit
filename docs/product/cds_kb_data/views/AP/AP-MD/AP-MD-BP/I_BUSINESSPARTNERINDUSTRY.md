---
name: I_BUSINESSPARTNERINDUSTRY
description: "Business PartnerINDUSTRY"
semantic_vi: "View Business Partner INDUSTRY cung cấp thông tin phân loại ngành công nghiệp cho đối tác kinh doanh, có thể được sử dụng để phân loại và phân tích mối quan hệ kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "industrycategory"
  - "loại ngành công nghiệp"
  - "sap"
  - "ap-md-bp"
  - "industry classification"
  - "phân loại ngành công nghiệp"
semantic_en: "The Business Partner INDUSTRY view provides industry classification information for business partners, which can be used to categorize and analyze business relationships."
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - business-partner
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERINDUSTRY

**Business PartnerINDUSTRY**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustrySector` | ✓ | |  | `ind_sector` | `CHAR(10)` | Industry |
| `IndustrySystemType` | ✓ | |  | `istype` | `CHAR(4)` | Industry System |
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `IsStandardIndustry` |  | |  | `isdef` | `CHAR(1)` | Industry is Standard for BP in Industry System |
| `IndustryKeyDescription` |  | | `_Text` | `IndustryKeyDescription` | `CHAR(100)` | Description |
| `_BusinessPartner` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_BusPartIndustrySystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Text` | `I_Industrykeysystemtexts` | [1..1] |
| `_BusPartIndustrySystem` | `I_BusPartIndustrySystem` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPAIS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true,
   delta.changeDataCapture: {
      mapping:[
                {
                    table: 'BUT0IS', role: #MAIN,
                    viewElement: ['IndustrySector','IndustrySystemType' , 'BusinessPartner'],
                    tableElement: ['ind_sector','istype','partner']
                },
                {
                    table: 'TB038B', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['IndustrySector','IndustrySystemType'],
                    tableElement: ['ind_sector','istype']
                }           
              
                
           ]
   }
 }
}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]                                  
@EndUserText.label: 'Core View for BUT0IS'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'IndustrySector'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerIndustry'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BusinessPartnerIndustry
  as select from but0is
  
    association [1..1] to I_BusinessPartner as _BusinessPartner    on _BusinessPartner.BusinessPartner  = $projection.BusinessPartner
    association [1..1] to I_Industrykeysystemtexts as _Text on  $projection.IndustrySystemType = _Text.IndustrySystemType
                                                            and $projection.IndustrySector = _Text.IndustrySector
                                                            and _Text.Language = $session.system_language
    association [0..1] to I_BusPartIndustrySystem  as _BusPartIndustrySystem on  $projection.IndustrySystemType = _BusPartIndustrySystem.IndustrySystemType
{
  key ind_sector as IndustrySector,
  @ObjectModel.foreignKey.association:'_BusPartIndustrySystem'
  key istype     as IndustrySystemType,
  @ObjectModel.foreignKey.association: '_BusinessPartner'
  key partner    as BusinessPartner,
  isdef          as IsStandardIndustry,
  _Text.IndustryKeyDescription,
  _BusinessPartner,
  _Text,
  _BusPartIndustrySystem
}
```
