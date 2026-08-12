---
name: I_MNTMBLAPPUSRDFLTADDRTYPETEXT
description: "Mobile User Default Address Type - Text"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPUSRDFLTADDRTYPETEXT')/$value
semantic_en: "Mobile User Default Address Type - Text"
semantic_vi: "Mobile User Default Address Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "mobile"
  - "user"
  - "default"
  - "address"
  - "type"
  - "text"
  - "language"
  - "dflt"
  - "addr"
  - "name"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
---
# I_MNTMBLAPPUSRDFLTADDRTYPETEXT

**Mobile User Default Address Type - Text**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPUSRDFLTADDRTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `MobileUserDefaultAddressType` | ✓ | |  | `cast( domvalue_l as /syclo/core_addr_type_dte )` | `CHAR(10)` | Notification address type |
| `MntMblAppUsrDfltAddrTypeName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPUSRDFLTADDRTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MNTMBLAPPUSRDFLTADDRTYPETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IMBLUSRDFLTADDRTYPETXT'

@EndUserText.label: 'Mobile User Default Address Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_MntMblAppUsrDfltAddrTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )     as Language,

      @ObjectModel.text.element: ['MntMblAppUsrDfltAddrTypeName']
  key cast( domvalue_l as /syclo/core_addr_type_dte ) as MobileUserDefaultAddressType,

      @Semantics.text: true
      ddtext                                          as MntMblAppUsrDfltAddrTypeName,

      _Language
}
where
      domname  = '/SYCLO/CORE_ADDR_TYPE_DTE'
  and as4local = 'A'
  and as4vers  = '0000'
```
