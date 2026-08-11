---
name: I_WASTESTREAMRGTYCODECONFIGN
description: "Waste Stream Regulatory Code Confign"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
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
