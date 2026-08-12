---
name: I_JITPCKGGRPDEF
description: "This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value
semantic_en: "This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Definition — CDS view giao diện dựa trên njit_d_pgd_hdr."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "definition"
  - "pckg"
  - "rack"
  - "size"
  - "number"
  - "range"
  - "interval"
  - "packaging"
  - "material"
tags:
  - LE
  - bo:businesspartner
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - master-data
  - material
  - order
  - bo:companycode
---
# I_JITPCKGGRPDEF

**This CDS view exposes the JIT packing group specification master data. A JIT packing group specification is a structured collection of attributes such as packing material, slot groups, etc., that define how JIT packing groups shall be created. This CDS view provides the data to answer the following business questions: What packing group specifications exist in the system? What is the rack size for a specific packing group? Which packing material is assigned to a packing group? What is the status of a packing group specification? What is the reorder configuration for a packing group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpDefID` |  | |  | `pckg_grp_def_id` | `CHAR(10)` | Package Group Specification ID |
| `JITPckgRackSize` |  | |  | `pckg_rack_size` | `INT1(3)` | Package Group: Rack Size |
| `NumberRangeInterval` |  | |  | `pckg_int_nr` | `CHAR(2)` | Number Range Number |
| `PackagingMaterial` |  | |  | `pckg_mat_id` | `CHAR(40)` | Package Group: Material ID |
| `JITPckgGrpDefStatus` |  | |  | `pckg_grp_status` | `CHAR(1)` | Package Specification Lifecycle Status |
| `PckgGrpDefReorder` |  | |  | `pckggrpdefreorder` | `CHAR(1)` | Indicator to represent reorder scenario of JIT call |
| `JITHandlingUnitRelevance` |  | |  | `jithandlingunitrelevance` | `CHAR(1)` | Package Group Handling Unit relevance |
| `CreationDateTime` |  | |  | `crea_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CreatedByUser` |  | |  | `crea_uname` | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  | `lchg_date_time` | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `LastChangedByUser` |  | |  | `lchg_uname` | `CHAR(12)` | User Name |
| `_ChangedByUser` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_JITPckgGrpDefStatus` | | ✓ | | | | |
| `_JITPckgGrpDefReorder` | | ✓ | | | | |
| `_JITHandlingUnitRelevance` | | ✓ | | | | |
| `_JITPackageGroupDefCell` | | ✓ | | | | |
| `_JITPackageGroupDefHierarchy` | | ✓ | | | | |
| `_PackageGroupDefinitionText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangedByUser` | `I_UserContactCard` | [1..1] |
| `_CreatedByUser` | `I_UserContactCard` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_JITPckgGrpDefStatus` | `I_JITPckgGrpDefStatus` | [0..1] |
| `_JITPckgGrpDefReorder` | `I_JITPckgGrpDefReorder` | [0..1] |
| `_JITHandlingUnitRelevance` | `I_JITHandlingUnitRelevance` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEF')/$value)*

```abap
@AccessControl              : { authorizationCheck       : #MANDATORY,
                                privilegedAssociations   : ['_CreatedByUser', '_ChangedByUser']
                              }
@Analytics                  : { dataCategory             : #DIMENSION,
                                internalName             : #LOCAL,
                                technicalName            : 'IJITPGDEF'
                              }
@EndUserText.label          : 'JIT Packing Group Definition'
@Metadata.allowExtensions   : true
@ObjectModel                : { alternativeKey           : [{ id           : 'JITPckgGrpDefID',
                                                              element      : ['JITPckgGrpDefID'],
                                                              uniqueness   : #UNIQUE_IF_NOT_INITIAL }],
                                modelingPattern          : #ANALYTICAL_DIMENSION,
                                representativeKey        : 'JITPckgGrpDefUUID',
                                sapObjectNodeType.name   : 'JustInTimePackgGrpSpec',
                                supportedCapabilities    : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                usageType                : { dataClass     : #MASTER,
                                                             serviceQuality: #A,
                                                             sizeCategory  : #S }
                                }

@VDM.viewType               : #BASIC
define root view entity I_JITPckgGrpDef
  as select from njit_d_pgd_hdr
  composition [0..*] of I_JITPckgGrpDefCell        as _JITPackageGroupDefCell
  composition [0..*] of I_JITPckgGrpDefHier        as _JITPackageGroupDefHierarchy
  composition [0..*] of I_JITPckgGrpDefTxt         as _PackageGroupDefinitionText
  association [1..1] to I_UserContactCard          as _ChangedByUser            on $projection.LastChangedByUser = _ChangedByUser.ContactCardID
  association [1..1] to I_UserContactCard          as _CreatedByUser            on $projection.CreatedByUser = _CreatedByUser.ContactCardID
  association [0..1] to I_Product                  as _Product                  on $projection.PackagingMaterial = _Product.Product
  association [0..1] to I_JITPckgGrpDefStatus      as _JITPckgGrpDefStatus      on $projection.JITPckgGrpDefStatus = _JITPckgGrpDefStatus.JITPckgGrpDefStatus
  association [0..1] to I_JITPckgGrpDefReorder     as _JITPckgGrpDefReorder     on $projection.PckgGrpDefReorder = _JITPckgGrpDefReorder.PckgGrpDefReorder
  association [0..1] to I_JITHandlingUnitRelevance as _JITHandlingUnitRelevance on $projection.JITHandlingUnitRelevance = _JITHandlingUnitRelevance.JITHandlingUnitRelevance
{
      @ObjectModel.text.association:'_PackageGroupDefinitionText'
  key db_key                   as JITPckgGrpDefUUID,
      pckg_grp_def_id          as JITPckgGrpDefID,
      pckg_rack_size           as JITPckgRackSize,
      pckg_int_nr              as NumberRangeInterval,
      @ObjectModel.foreignKey.association:'_Product'
      pckg_mat_id              as PackagingMaterial,
      @ObjectModel.foreignKey.association:'_JITPckgGrpDefStatus'
      pckg_grp_status          as JITPckgGrpDefStatus,
      @ObjectModel.foreignKey.association:'_JITPckgGrpDefReorder'
      pckggrpdefreorder        as PckgGrpDefReorder,
      @ObjectModel.foreignKey.association:'_JITHandlingUnitRelevance'
      jithandlingunitrelevance as JITHandlingUnitRelevance,
      @Semantics.systemDateTime.createdAt: true
      crea_date_time           as CreationDateTime,
      @Semantics.user.createdBy: true
      @ObjectModel.foreignKey.association:'_CreatedByUser'
      crea_uname               as CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      lchg_date_time           as LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      @ObjectModel.foreignKey.association:'_ChangedByUser'
      lchg_uname               as LastChangedByUser,
      _ChangedByUser,
      _CreatedByUser,
      _JITPackageGroupDefCell,
      _JITPackageGroupDefHierarchy,
      _PackageGroupDefinitionText,
      _Product,
      _JITPckgGrpDefStatus,
      _JITPckgGrpDefReorder,
      _JITHandlingUnitRelevance
}
```
