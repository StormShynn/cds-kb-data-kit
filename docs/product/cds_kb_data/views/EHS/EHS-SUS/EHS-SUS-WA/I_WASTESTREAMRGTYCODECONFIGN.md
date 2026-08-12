---
name: I_WASTESTREAMRGTYCODECONFIGN
description: "Waste Stream Regulatory Code Confign"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value
semantic_en: "Waste Stream Regulatory Code Confign"
semantic_vi: "Waste Stream Regulatory Code Confign — CDS view giao diện (master data) dựa trên ehewac_wa_rgcde."
keywords:
  - "waste"
  - "stream"
  - "regulatory"
  - "code"
  - "confign"
  - "rgty"
  - "country"
  - "text"
  - "name"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTESTREAMRGTYCODECONFIGN

**Waste Stream Regulatory Code Confign**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteStreamRgtyCode` | ✓ | |  | `wastestreamrgtycode` | `CHAR(4)` | Waste Stream Regulatory Code |
| `Country` |  | |  | `country` | `CHAR(3)` | Country/Region Key |
| `WasteStreamRgtyCodeText` |  | |  | `description` | `CHAR(60)` | Description (Short) |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTESTREAMRGTYCODECONFIGN')/$value)*

```abap
@EndUserText.label: 'Waste Stream Regulatory Code Confign'

@AbapCatalog:
{
  sqlViewName: 'IWSTSTRGCDECFG',
  compiler.compareFilter: true
}

@AccessControl:
{
  authorizationCheck: #NOT_REQUIRED
}

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:
{
  usageType:
  {
    dataClass: #MASTER,
    sizeCategory: #S,
    serviceQuality: #A
  },
  resultSet.sizeCategory:#XS,
  representativeKey: 'WasteStreamRgtyCode',
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ],
  modelingPattern: #NONE  
}

@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_WasteStreamRgtyCodeConfign 
       as select from ehewac_wa_rgcde as RegCode
       
     left outer to one join ehewac_wa_rgcdet as RegCodeText on RegCode.wastestreamrgtycode = RegCodeText.wastestreamrgtycode  
                                                            and RegCodeText.language = $session.system_language
                                                            
     left outer to one join I_CountryText as CountryText on RegCode.country =  CountryText.Country
                                                        and CountryText.Language = $session.system_language                                                   
{
 
    @ObjectModel.text.element: ['WasteStreamRgtyCodeText']
key RegCode.wastestreamrgtycode as WasteStreamRgtyCode,

    RegCode.country as Country,
    
    @Semantics.text: true
    RegCodeText.description as WasteStreamRgtyCodeText,
    
    CountryText.CountryName as CountryName

}
```
