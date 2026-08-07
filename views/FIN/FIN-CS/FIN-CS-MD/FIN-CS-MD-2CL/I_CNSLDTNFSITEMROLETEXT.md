---
name: I_CNSLDTNFSITEMROLETEXT
description: Cnsldtnfsitemroletext
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMROLETEXT

**Cnsldtnfsitemroletext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_FSItemAttribValueTxt` | `Language` |  |  |
| `CnsldtnFSItemRole` | ✓ | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemrole preserving type )` |  |  |
| `CnsldtnFSItemRoleText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValueText` |  |  |
| `CnsldtnFSItemRoleLongText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValLongText` |  |  |
| `_CnsldtnFSItemRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemRole` | `I_CnsldtnFSItemRole` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSIROLET',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'CnsldtnFSItemRole',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,                            
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Role Selection - Text'

define view I_CnsldtnFSItemRoleText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '003') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemRole as _CnsldtnFSItemRole on $projection.CnsldtnFSItemRole = _CnsldtnFSItemRole.CnsldtnFSItemRole
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _FSItemAttribValueTxt.Language,

      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemRole',
                                           element: 'CnsldtnFSItemRole' } }]
  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemrole preserving type ) as CnsldtnFSItemRole,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText                                            as CnsldtnFSItemRoleText,

      @Semantics.text
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText                                          as CnsldtnFSItemRoleLongText,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemRole
}
```
