---
name: I_MANAGESEPASENDERTYPETEXT
description: "Single Euro Payments Area Mandate Sender Type - Text"
app_component: FI-FIO-AR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
