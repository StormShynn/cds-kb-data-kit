---
name: I_CURRENTBUSINESSPROCESSTEXT
description: "Current Business Process - Text"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTBUSINESSPROCESSTEXT')/$value
semantic_en: "Current Business Process - Text"
semantic_vi: "Current Business Process - Text — CDS view giao diện (master data) dựa trên cbpt."
keywords:
  - "current"
  - "business"
  - "process"
  - "text"
  - "controlling"
  - "area"
  - "language"
  - "name"
  - "description"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - bo:businesspartner
---
# I_CURRENTBUSINESSPROCESSTEXT

**Current Business Process - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTBUSINESSPROCESSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( cbpt.kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `BusinessProcess` | ✓ | |  | `prznr` | `CHAR(12)` | Business Process |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BusinessProcessName` |  | |  | `ktext` | `CHAR(20)` | General Name |
| `BusinessProcessDescription` |  | |  | `ltext` | `CHAR(40)` | Description |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTBUSINESSPROCESSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CURRENTBUSINESSPROCESSTEXT')/$value)*

```abap
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFICBUSPROCESST' //Inserted by VDM CDS Suite Plugin
@ObjectModel: { representativeKey: 'BusinessProcess',
                usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M },
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT }    

@EndUserText.label: 'Current Business Process - Text'
//@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

@Metadata.ignorePropagatedAnnotations:true
define view entity I_CurrentBusinessProcessText as select from cbpt

inner join cbpr on  cbpt.kokrs = cbpr.kokrs
                and cbpt.prznr = cbpr.prznr
                and cbpt.datbi = cbpr.datbi

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1]  to I_Language           as _Language             on $projection.Language          = _Language.Language
  association[1]      to I_ControllingArea    as _ControllingArea      on  $projection.ControllingArea  = _ControllingArea.ControllingArea   
{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
  @ObjectModel.foreignKey.association: '_ControllingArea' 
  key cast( cbpt.kokrs as fis_kokrs preserving type ) as ControllingArea,
  key cbpt.prznr as BusinessProcess,
  @Semantics.language
  @ObjectModel.foreignKey.association: '_Language' //Inserted by VDM CDS Suite Plugin
  key cbpt.spras as Language ,
//  @Semantics.businessDate.to: true
//  key cbpt.datbi as ValidityEndDate,
  @Semantics.text
  cbpt.ktext as BusinessProcessName,
  @Semantics.text
  cbpt.ltext as BusinessProcessDescription, 
//  @Semantics.businessDate.from: true
//  cbpr.datab as ValidityStartDate,
  _Language,
  _ControllingArea,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED

  
}
where cbpr.datbi   >= $session.system_date  and cbpr.datab <= $session.system_date
;
```
