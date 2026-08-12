---
name: I_MANAGESEPASENDERTYPETEXT
description: "Single Euro Payments Area Mandate Sender Type - Text"
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value
semantic_en: "Single Euro Payments Area Mandate Sender Type - Text"
semantic_vi: "SEPA Mandate Sender Type - Text — CDS view giao diện dựa trên I_BusinessObjTypeText."
keywords:
  - "sepa"
  - "mandate"
  - "sender"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - component:FI-FIO-AR-2CL
  - FI-FIO
  - FI-FIO-AR
  - FI-FIO-AR-2CL
  - interface-view
  - lob:finance
  - payment
  - bo:salesorder
---
# I_MANAGESEPASENDERTYPETEXT

**Single Euro Payments Area Mandate Sender Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SEPAMandateSenderType` | ✓ | |  | `BusinessObjectType` | `CHAR(10)` | Object type |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `SEPAMandateSenderTypeName` |  | |  | `cast(BusinessObjectTypeDescription as fsepa_sender_type_name preserving type)` | `CHAR(80)` | SEPA Mandate Sender Type Name |
| `_SenderType` |  | |  | `_BusinessObjectType` |  |  |
| `_Language` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MANAGESEPASENDERTYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISEPASENDTYTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'SEPA Mandate Sender Type - Text'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SEPAMandateSenderType'
@ObjectModel.usageType: {serviceQuality: #D, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@VDM.viewType: #BASIC
@Analytics:{
    dataExtraction: {
       enabled: true
    }
    
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_ManageSEPASenderTypeText as select from I_BusinessObjTypeText 
{
        @ObjectModel.foreignKey.association: '_SenderType'
    key BusinessObjectType            as SEPAMandateSenderType,
    
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
    key Language,
    
        @Semantics.text: true
        cast(BusinessObjectTypeDescription as fsepa_sender_type_name preserving type) as SEPAMandateSenderTypeName,       
        
        _BusinessObjectType           as _SenderType,
        _Language       
}
where BusinessObjectType = 'BUS1006' 
   or BusinessObjectType = 'BUS3007'  
   or BusinessObjectType = 'BSEG'
```
